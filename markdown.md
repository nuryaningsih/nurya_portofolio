# Exploring Trends in Video Game Sales
## Project Description:
In this project, we explore a dataset containing information about video game sales from various platforms, genres, and regions. The main goal of the project is to analyze trends in the video game industry over time, understand consumer preferences, and identify factors that contribute to the success of video games.

## Objectives and Problem Statement:
The project aims to answer several key questions, including:
- What are the trends in video game releases over the years?
- Which gaming platforms have been the most successful, and how has their popularity evolved?
- What genres tend to perform best in terms of sales, and are there regional variations in genre preferences?
- Is there a correlation between critic/user reviews and game sales?
- Are there significant differences in average user ratings between different platforms or genres?

## Dataset:
- [Dataset](https://drive.google.com/drive/folders/1gdFv0Qaty0ibmUJRLoU9FHqEFXn3R-Sa?usp=drive_link)
- Size: The dataset contains thousands of records, including information about game titles, platforms, genres, sales figures, critic/user reviews, and ESRB ratings.

## Data Exploration:
- Exploration of video game releases over the years to identify growth trends and shifts in the industry.
- Analysis of top-selling platforms and their sales trends to understand platform dominance and lifecycle.
- Investigation of genre sales across different regions to uncover regional preferences and variations.
- Correlation analysis between critic/user reviews and game sales to assess their impact on sales performance.

## Preprocessing:
- Handling missing data: Imputation or removal of records with missing values.
- Normalization: Scaling numerical features to a common scale.
- Encoding categorical variables: Converting categorical attributes into numerical representations.

## Model and Method:
- Exploratory data analysis (EDA): Utilizing descriptive statistics and visualization techniques to gain insights into the data.
  - Video Game Releases Over Time:
    
    ![Games EDA 1](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/games_eda_1.png)
    
    - The analysis of video game releases over the years revealed a gradual increase followed by a peak around 2008, indicating the industry's evolution and growth. The recent decline in releases suggested a shift towards digital distribution and mobile gaming, impacting market dynamics.
  - Platform Sales Trends:
    
     ![Games EDA 2.2](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/games_eda_2_2.png)
    
    - Insights into the lifecycle of gaming platforms underscored the industry's continuous evolution and the rise and fall of different platforms.
  - Genre Sales Analysis:
    
    ![Games EDA 3](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/games_eda_3.png)
    
    - Genre sales analysis identified Action, Shooter, Role-Playing, and Sports genres as consistent performers globally, catering to diverse gaming audiences.
  - Regional Variations in Platform and Genre Preferences:
    
    ![Games EDA 4.2](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/games_eda_4_2.PNG)
    
    - The exploration of platform and genre preferences across different regions showcased regional variations in gaming preferences and market dynamics. North America and Europe favored consoles like Xbox and PlayStation, while Japan preferred handheld consoles like Nintendo 3DS.

- Correlation analysis: Calculating correlation coefficients to measure the relationship between variables.
- Hypothesis testing: Conducting t-tests to compare average user ratings between different platforms or genres.

## Training and Model Evaluation:
- No machine learning models are trained in this project. Instead, statistical analyses and hypothesis testing are performed to draw conclusions.

## Results and Findings:
- Identification of key trends in video game releases, platform dominance, and genre preferences.
- Insights into the impact of critic/user reviews on game sales and regional variations in gaming preferences.
- Significant differences in average user ratings between certain platforms or genres.

## Visualization:
- Bar plots, line charts, scatter plots, and box plots are used to visualize trends, distributions, and relationships within the data.

## Conclusion and Insights:
- The video game industry is dynamic and influenced by various factors, including technological advancements, consumer preferences, and regional variations.
- Understanding these trends and preferences is crucial for stakeholders in the gaming industry to make informed decisions and develop successful strategies.

## Source Code:
The code for the project is available on Google Colab [here](https://colab.research.google.com/drive/1pV3gezPD3bBFq0LmLP0m2usFhCqNAZkE).

---
# Insights from Ride-Share Data Analysis

## Project Description
The project aims to analyze ride-share data from Chicago to gain insights into passenger preferences, market dynamics, and the impact of external factors such as weather on trip duration. By exploring various datasets, including taxi trip data, average trip duration, and weather conditions, the project seeks to provide actionable insights for ride-sharing companies to optimize operations, enhance customer experiences, and improve service efficiency.

## Objectives and Problems
The main goal of the project is to extract meaningful insights from ride-share data to address several key objectives:
1. Identify top drop-off locations to understand demand patterns and optimize service coverage.
2. Analyze taxi company performance to identify market leaders and areas for improvement.
3. Investigate the impact of weather on trip duration to enhance service reliability and customer satisfaction.

## Dataset
1. [**Taxi Trip Data:**](https://drive.google.com/drive/folders/1gdFv0Qaty0ibmUJRLoU9FHqEFXn3R-Sa?usp=drive_link) Includes information about the number of trips associated with each taxi company in Chicago.
2. [**Average Trip Duration Data:**](https://drive.google.com/drive/folders/1gdFv0Qaty0ibmUJRLoU9FHqEFXn3R-Sa?usp=drive_link) Provides details about the average duration of trips from the Loop to O'Hare International Airport.
3. [**Weather Conditions Data:**](https://drive.google.com/drive/folders/1gdFv0Qaty0ibmUJRLoU9FHqEFXn3R-Sa?usp=drive_link) Contains data on weather conditions, such as "Good" (non-rainy) and "Bad" (rainy) days.

## Data Exploration
- Explored taxi trip data to identify top-performing companies and popular drop-off locations.
- Visualized the distribution of trips among taxi companies and top drop-off locations using bar plots.

  ![](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/ride_eda_1.png)
  
- Examined the average trip duration data to understand trends and patterns in travel times.

  ![](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/ride_eda.png)

## Preprocessing
- Cleaned outliers from the average trip duration data to ensure the accuracy of the analysis.
- Categorized weather conditions into "Good" and "Bad" days for further analysis.

## Model and Method
- Used statistical tests such as Levene's test and independent t-test to compare trip durations between rainy and non-rainy Saturdays.
- Employed bar plots to visualize the distribution of trips among taxi companies and top drop-off locations.

## Training and Model Evaluation
- Trained statistical models to compare trip durations under different weather conditions.
- Evaluated model performance using p-values and statistical significance tests.

## Results and Findings
1. Identified top drop-off locations, including Loop, River North, and O'Hare Airport, based on average trip volumes.
2. Flash Cab emerged as the top-performing taxi company, indicating its strong market presence and customer satisfaction.
3. Rainy weather significantly impacted trip durations, leading to longer travel times from the Loop to O'Hare International Airport on Saturdays.

## Visualizations
- Bar plots were used to visualize the distribution of trips among taxi companies and top drop-off locations, highlighting key insights from the analysis.

## Conclusion and Learnings
The project provided valuable insights into passenger preferences, market dynamics, and the impact of weather on trip duration in the ride-sharing industry. Key learnings include the importance of optimizing service coverage, enhancing customer experiences, and adapting operations based on weather forecasts. Future steps may involve further analysis of customer feedback, driver performance metrics, and market trends to drive continuous improvement and innovation in the ride-sharing landscape.

## Source Code
The code for the project is available on Google Colab [here](https://colab.research.google.com/drive/1nuPjOVtceFP3VJeMESbZTPb0te5VMldk)

---
# Telecommunications Plan Analysis

## Project Description:
The project aims to analyze the usage patterns and revenue generation of users subscribed to two telecommunications plans: Surf and Ultimate. By exploring the dataset, the goal is to gain insights into user behavior, identify any significant differences between the plans, and provide recommendations for optimizing revenue and service offerings.

## Goals and Problems:
The main objective of the project is to understand the usage patterns and revenue generation of users on different telecommunications plans. The project seeks to answer questions such as:
- What are the average call duration, message count, and data usage volume for users on each plan?
- Is there a significant difference in revenue generation between Surf and Ultimate plan users?
- Are there any regional differences in revenue generation among users?

## Dataset:
The [dataset](https://drive.google.com/drive/folders/1gdFv0Qaty0ibmUJRLoU9FHqEFXn3R-Sa?usp=drive_link) contains information about users' usage patterns, plan details, and revenue generation. It includes attributes such as user ID, plan type, call duration, message count, data usage, city, and revenue. The dataset consists of two subsets for the Surf and Ultimate plans, each containing information for multiple users over a certain period.

## Data Exploration:
Exploratory data analysis involves examining summary statistics, visualizing distributions of usage metrics, and comparing patterns between Surf and Ultimate plan users. Insights such as average usage, variability, and distribution of usage metrics are obtained from the exploration process.

![](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/plan_eda.png)

## Preprocessing:
Preprocessing steps may include handling missing data, normalization, encoding categorical variables, and removing outliers. The goal is to prepare the dataset for modeling and analysis by ensuring data quality and consistency.

## Model and Method:
The analysis may involve statistical methods such as hypothesis testing (e.g., Independent Samples T-test) to compare revenue between plan types and regions. Additionally, machine learning models or predictive analytics techniques can be used to identify factors influencing revenue generation.

## Training and Model Evaluation:
The models are trained using relevant features from the dataset, and parameters are selected based on performance metrics such as accuracy, precision, recall, or F1 score. Model evaluation involves assessing performance on validation or test datasets to ensure generalizability.

## Results and Findings:
The results include insights into usage patterns, revenue generation, and any significant differences between plan types or regions. Visualizations support the findings and provide a clear representation of the analysis outcomes.

## Conclusion and Learning:
In conclusion, the project provides valuable insights into user behavior, revenue generation, and plan performance for the telecommunications company. Challenges faced during the analysis are discussed, along with lessons learned and recommendations for future steps.

## Source Code:
The code for the project is available on Google Colab [here](https://colab.research.google.com/drive/1PuTI643N5dELZDpM3ctF_k19C0b9NdBI#scrollTo=qeguC0oSm9R7).

---
## Predicting Customer Churn for Bank Beta

### Description:
This project aims to develop a predictive model to identify potential churners among Bank Beta's customers. The primary goal is to help the bank proactively retain loyal customers by predicting churn in advance. By leveraging machine learning techniques, we seek to build a robust model that can accurately predict customer churn and provide valuable insights for implementing targeted retention strategies.

### Objectives and Problems:
The main objective of this project is to build a predictive model with a high F1 score (>0.59) to identify potential churners among bank customers. Additionally, we aim to evaluate the model's performance using the AUC-ROC metric. The key problem we are trying to solve is the need for Bank Beta to reduce customer churn and retain valuable customers. By predicting churn in advance, the bank can implement proactive measures to mitigate churn and enhance customer retention.

### Dataset:
- The dataset contains information about Bank Beta's customers, including demographic data, account balance, tenure, and whether they exited the bank.
- [Source](https://drive.google.com/drive/folders/1gdFv0Qaty0ibmUJRLoU9FHqEFXn3R-Sa?usp=drive_link)
- Number of records: 10,000
- Attributes: Gender, Age, Balance, Tenure, Exited (target variable)

### Data Exploration:
- Explored the dataset to understand its structure and characteristics.
- Conducted visualizations to analyze the distribution of variables, identify patterns, and explore relationships between features and the target variable (Exited).

### Preprocessing:
- Handled missing data by imputing or removing records with missing values.
- Encoded categorical variables and normalized numerical features to prepare the data for modeling.

### Model and Method:
- Utilized various machine learning algorithms, including Decision Tree, Random Forest, Logistic Regression, and XGBoost.
- Selected models based on their suitability for binary classification tasks and ability to handle non-linear relationships and interactions among features.

### Training and Model Evaluation:
- Trained each model using the training dataset and evaluated its performance on the testing dataset.
- Tuned model hyperparameters and selected optimal parameters to maximize performance metrics such as accuracy, precision, recall, F1 score, and AUC-ROC.

### Results and Findings:
- The XGBoost model emerged as the most promising approach, achieving high accuracy, precision, recall, and F1 scores for predicting customer churn.
- Despite its strong performance, there is still room for improvement, particularly in addressing overfitting and enhancing generalization.

### Visualizations:
- Included visualizations such as histograms, scatter plots, and ROC curves to illustrate key findings and model performance.

### Conclusion and Learnings:
- Concluded that the XGBoost model shows promise in predicting customer churn for Bank Beta.
- Identified challenges such as overfitting and the need for further refinement and optimization.
- Learned the importance of feature engineering, hyperparameter tuning, and model selection in developing effective predictive models.
- Next steps include refining the XGBoost model, exploring advanced techniques, and implementing proactive churn prevention strategies based on model insights.

### Source Code:
The code for the project is available on Google Colab [here](https://colab.research.google.com/drive/1AlrVJsj0y-ZBjw5HbhW9NPt-Ac96l8oa)

---

# Optimizing Gold Recovery Process
## Description:
The project aims to optimize the gold recovery process for Zyfra, a mining company, by leveraging machine learning models to predict gold yield from gold ore. By accurately predicting the concentration of valuable metals at different stages of the processing pipeline, Zyfra can identify key factors influencing gold recovery and optimize its extraction processes accordingly.

## Objective and Problem:
The primary goal is to develop predictive models that accurately forecast the concentration of gold and other valuable metals during various purification stages. By doing so, Zyfra seeks to improve the efficiency and effectiveness of its gold extraction processes, ultimately maximizing gold recovery rates and minimizing operational costs.

## Dataset:
The [dataset](https://drive.google.com/drive/folders/1gdFv0Qaty0ibmUJRLoU9FHqEFXn3R-Sa?usp=drive_link) consists of mineral processing data, including features related to ore composition, process parameters, and metal concentrations at different stages of purification. It comprises both training and test datasets, with information on gold, silver, lead, and other relevant metals.

## Exploratory Data Analysis (EDA):
EDA involves exploring the dataset, visualizing key features, and gaining insights into the relationships between variables. This process includes analyzing the distribution of metal concentrations across purification stages, examining the impact of feed particle size on gold recovery, and identifying any anomalies or missing values in the data.

- Metal Concentration Trends Across Purification Stages

  ![Gold EDA](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/gold_eda.png)
  
- Impact of Feed Particle Size on Gold Recovery

  ![Gold EDA 1](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/gold_eda_1.png)
  
- Identification of Abnormal Total Substance Concentrations

  ![Gold EDA 2](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/gold_eda_2.png)

## Preprocessing:
Preprocessing steps include handling missing values, removing outliers, and normalizing or scaling features as necessary. Additionally, categorical variables may be encoded for model compatibility, and the dataset may be split into training and test sets for model evaluation.

## Model and Method:
Two main models are explored: Linear Regression and RandomForestRegressor. Linear Regression offers simplicity and interpretability, while RandomForestRegressor provides the ability to capture non-linear relationships and complex patterns in the data.

## Training and Model Evaluation:
Models are trained using cross-validation techniques to assess their performance on unseen data. Evaluation metrics such as sMAPE (Symmetric Mean Absolute Percentage Error) and MAE (Mean Absolute Error) are utilized to measure the accuracy of predictions and identify the best-performing model.

## Results and Findings:
Both Linear Regression and RandomForestRegressor models are evaluated based on their performance metrics on training and test datasets. Insights are drawn regarding the models' ability to generalize to unseen data and their effectiveness in predicting gold recovery rates.

## Visualization:
Visualizations such as histograms, scatter plots, and model performance plots are included to support the analysis and showcase key findings from the project.

## Conclusion and Learning:
The project concludes with a summary of key learnings, insights gained, and next steps for further optimization. Challenges faced during the project are discussed, along with potential strategies for improvement and future directions.

## Source Code:
The code for the project is available on Google Colab [here](https://colab.research.google.com/drive/14S6oRRQ28eu5xxGnnfr2IDazTGPgDIDb).

---

# Predicting Customer Churn in Telecommunications
## Project Description:
This project aims to develop a machine learning model to predict customer churn in a telecommunications company. Customer churn refers to the phenomenon where customers terminate their subscription or service with the company. The primary goal of this project is to identify factors influencing churn and build a predictive model that can accurately forecast which customers are likely to churn in the future. By doing so, the company can take proactive measures to retain at-risk customers and improve overall customer satisfaction.

## Objectives and Problem Statement:
The main objective of this project is to develop a predictive model that can accurately identify customers at risk of churning. The problem statement revolves around understanding the key factors driving customer churn and leveraging this insight to implement targeted retention strategies. By predicting churn in advance, the company can take appropriate actions, such as offering incentives, personalized promotions, or improving service quality, to retain valuable customers.

## Dataset:
The dataset used in this project is sourced from the telecommunications company's customer database. It contains information about various attributes related to customer demographics, services subscribed, billing details, and churn status. The dataset comprises both numerical and categorical features, including customer ID, gender, age, type of services subscribed, monthly charges, payment method, and churn status. It consists of approximately 7,000 records.

## Data Exploration:
The data exploration phase involved examining the dataset's structure, checking for missing values, and gaining insights into the distribution of key variables. Exploratory data analysis (EDA) techniques such as summary statistics, histograms, and correlation analysis were employed to understand the relationships between different features and the target variable (churn status).

- Customer Churn Distribution

  ![Churn EDA](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/curn_eda.png)
  
- Customer Segmentation

  ![Churn EDA 1](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/curn_eda_1.PNG)

## Preprocessing:
Preprocessing steps included handling missing values, encoding categorical variables, and scaling numerical features if necessary. Missing data were either imputed or dropped depending on the extent of missingness. Categorical variables were encoded using techniques like one-hot encoding or label encoding to prepare them for model training.

## Model and Method:
Several machine learning algorithms were evaluated for predicting customer churn, including Logistic Regression, Decision Trees, Random Forest, Gradient Boosting, and XGBoost. The rationale behind selecting these models was to explore a variety of approaches and identify the one with the best performance in terms of accuracy, ROC AUC, precision, and recall.

## Training and Model Evaluation:
The models were trained using the training dataset and evaluated using cross-validation techniques to assess their generalization performance. Hyperparameter tuning was performed using grid search or random search to optimize each model's parameters. The evaluation metrics used included accuracy, ROC AUC, precision, recall, and F1-score. Both training and testing datasets were used to evaluate the models to ensure they could generalize well to unseen data.

## Results and Findings:
Based on the evaluation metrics, the Gradient Boosting Classifier (GBC) emerged as the most effective model for predicting customer churn. It achieved a good balance between accuracy, ROC AUC, precision, and recall on both training and testing datasets. The GBC model's ability to sequentially improve performance and handle complex relationships in the data made it the preferred choice for deployment.

## Visualizations:
Visualizations such as ROC curves, confusion matrices, and feature importance plots were created to support the model evaluation and highlight key findings. These visualizations helped in understanding the model's performance and identifying important features driving customer churn.

## Conclusion and Learnings:
In conclusion, the project successfully developed a predictive model for customer churn prediction in the telecommunications company. By leveraging machine learning techniques, valuable insights were gained into factors influencing churn, and an effective model was built to forecast customer behavior. Challenges faced during the project included handling imbalanced data, optimizing model parameters, and interpreting complex ensemble models. Moving forward, the company can utilize the developed model to implement targeted customer retention strategies and improve overall business outcomes.

## Source Code:
The code for the project is available on Google Colab at [this link](https://colab.research.google.com/drive/1f8xEsndP6XpD9v9lkCP5_1mQzf2O49t8).
