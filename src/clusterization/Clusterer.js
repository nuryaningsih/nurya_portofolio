import React from 'react';
import PropTypes from 'prop-types';

import * as events from '../util/events';
import { getProp, isControlledProp } from '../util/props';
import { withParentContext, ParentContext } from '../Context';
import withYMaps from '../withYMaps';
import applyRef from '../util/ref';

export class Clusterer extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const instance = Clusterer.mountObject(
      this.props.ymaps.Clusterer,
      this.props
    );

    this.setState({ instance });
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      Clusterer.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    Clusterer.unmountObject(this.state.instance, this.props);
  }

  render() {
    return (
      <ParentContext.Provider value={this.state.instance}>
        {this.props.children}
      </ParentContext.Provider>
    );
  }

  static mountObject(Clusterer, props) {
    const { instanceRef, parent, _events } = events.separateEvents(props);

    const options = getProp(props, 'options');

    const instance = new Clusterer(options);

    Object.keys(_events).forEach(key =>
      events.addEvent(instance, key, _events[key])
    );

    if (parent.geoObjects && typeof parent.geoObjects.add === 'function') {
      parent.geoObjects.add(instance);
    } else if (parent.add && typeof parent.add === 'function') {
      parent.add(instance);
    } else {
      throw new Error('No parent found to mount Clusterer');
    }

    applyRef(null, instanceRef, instance);

    return instance;
  }

  static updateObject(instance, oldProps, newProps) {
    const { _events: newEvents, instanceRef } = events.separateEvents(newProps);
    const { _events: oldEvents, instanceRef: oldRef } = events.separateEvents(
      oldProps
    );

    if (isControlledProp(newProps, 'options')) {
      const oldOptions = getProp(oldProps, 'options');
      const newOptions = getProp(newProps, 'options');

      if (oldOptions !== newOptions) {
        instance.options.set(newOptions);
      }
    }

    events.updateEvents(instance, oldEvents, newEvents);

    applyRef(oldRef, instanceRef, instance);
  }

  static unmountObject(instance, props) {
    const { instanceRef, parent, _events } = events.separateEvents(props);

    if (instance !== null) {
      Object.keys(_events).forEach(key =>
        events.removeEvent(instance, key, _events[key])
      );

      if (parent.geoObjects && typeof parent.geoObjects.remove === 'function') {
        parent.geoObjects.remove(instance);
      } else if (parent.remove && typeof parent.remove === 'function') {
        parent.remove(instance);
      }

      applyRef(instanceRef);
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
  Clusterer.propTypes = {
    /** Clusterer [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Clusterer-docpage/) */
    options: PropTypes.shape({}),
    /** Uncontrolled Clusterer [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Clusterer-docpage/) */
    defaultOptions: PropTypes.shape({}),

    instanceRef: PropTypes.func,

    ymaps: PropTypes.object,

    parent: PropTypes.object,

    children: PropTypes.node,
  };
}

export default withParentContext(withYMaps(Clusterer, true, ['Clusterer']));
