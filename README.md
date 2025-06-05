# Fake-News-Prediction
**Step-by-Step Breakdown**

&emsp;1. Library Imports

->The notebook begins by importing essential Python libraries

->Data handling: NumPy, pandas

->Text preprocessing: NLTK, regular expressions

->Machine Learning tools: Scikit-learn

2. NLTK Setup
   
->Downloads a list of common English stopwords (like "the", "and", "is") which are not useful for classification and should be removed during preprocessing.

3. Dataset Loading
 
->A CSV file containing labeled news articles is loaded into a DataFrame. It handles any problematic rows while reading.

4. Initial Exploration
 
->The dataset's shape, head, tail, and data types are printed. Summary statistics and missing values are also checked.

5. Handling Missing Values
 
->All missing text data is replaced with an empty string to ensure uniformity during processing.

6. Label Encoding
 
->The label column is converted from text format to numerical format (e.g., real = 1, fake = 0) to be compatible with machine learning models.

7. Text Preprocessing
 
->Each news article undergoes:

->Lowercasing

->Removal of non-alphabetic characters

->Tokenization

->Stopword removal

->Word stemming (reducing words to root form)

8. Feature Extraction (TF-IDF)

->The cleaned text is converted into a numerical format using the TF-IDF method, which measures the importance of words relative to the dataset.

9. Train-Test Split
    
->The dataset is divided into training and testing sets to evaluate the model's performance effectively.

10. Model Training
    
->A Logistic Regression model is trained on the processed training data.

11. Model Evaluation
    
->The model’s accuracy is computed on both training and test sets to assess overfitting or underfitting.

12. Making Predictions

->The model is used to classify a sample news article and demonstrate prediction capability.



