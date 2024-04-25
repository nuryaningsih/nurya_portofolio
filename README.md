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
- [Dataset](https://drive.google.com/drive/folders/1cDsdsaB9r89tNy4fWhAZawPNtZNUvwMA?usp=drive_link)
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
    ![Games EDA 2.1](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/games_eda_2_1.png)
    ![Games EDA 2.2](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/games_eda_2_2.png)
    - Insights into the lifecycle of gaming platforms underscored the industry's continuous evolution and the rise and fall of different platforms.
  - Genre Sales Analysis:
    ![Games EDA 3](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/games_eda_3.png)
    - Genre sales analysis identified Action, Shooter, Role-Playing, and Sports genres as consistent performers globally, catering to diverse gaming audiences.
  - Regional Variations in Platform and Genre Preferences:
    ![Games EDA 4.1](https://raw.githubusercontent.com/nuryaningsih/nurya_portofolio/main/images/games_eda_4_1.PNG)
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
The code for the project is available on GitHub [here](https://github.com/nuryaningsih/CodeCraftedAtTripleTen/blob/main/5_Identifying_Success_Patterns_in_Video_Games_for_Strategic_Advertising_Campaign_Planning.ipynb).

---

# Optimizing Gold Recovery Process

## Description:
The project aims to optimize the gold recovery process for Zyfra, a mining company, by leveraging machine learning models to predict gold yield from gold ore. By accurately predicting the concentration of valuable metals at different stages of the processing pipeline, Zyfra can identify key factors influencing gold recovery and optimize its extraction processes accordingly.

## Objective and Problem:
The primary goal is to develop predictive models that accurately forecast the concentration of gold and other valuable metals during various purification stages. By doing so, Zyfra seeks to improve the efficiency and effectiveness of its gold extraction processes, ultimately maximizing gold recovery rates and minimizing operational costs.

## Dataset:
The [dataset](https://drive.google.com/drive/folders/1r45VuaG5XqThRJAMlUs9zYhBWCMxxgHs?usp=drive_link) consists of mineral processing data, including features related to ore composition, process parameters, and metal concentrations at different stages of purification. It comprises both training and test datasets, with information on gold, silver, lead, and other relevant metals.

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
The source code for the project can be accessed on GitHub [here](https://github.com/nuryaningsih/CodeCraftedAtTripleTen/blob/main/10_Predicting_Gold_Extraction_Efficiency_Enhancing_Production_Processes_with_Zyfra_Solutions.ipynb).

---

# [Portfolio Project: Predicting Customer Churn in Telecommunications]

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
The source code for this project can be accessed on GitHub at [this link](https://github.com/nuryaningsih/CodeCraftedAtTripleTen/blob/main/Predicting_and_Mitigating_Customer_Churn_at_Interconnect_Data_Driven_Strategies_for_Enhanced_Client_Retention.ipynb).
