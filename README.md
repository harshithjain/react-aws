This project is an example for building React application using AWS.

Here 
<li>React is front end layer</li>
<li>Dynamodb is Backend layer for getting data</li>
<li>AWS lambda covered with API Gateway acts as middle layer which can be invoked from React <li>
  
  
### AWS Services Used:
<b>AWS DynamoDB</b>
This service is used to Create/Insert records Tables and store default static data.

<b>AWS Amplify</b>
This services is connected with my github url, so that the application is auto build and deployed whenever there is a push made to "main" branch of this repo. The AWS Amplify pulls the code from {main} branch and host the same at "https://main.dpn2zrwfwlxsn.amplifyapp.com/"

<b>AWS Lambda:</b> 
This service is used to query/retrieve the data from Dynamodb using aws-sdk.

We created 4 different lambda functions as part of this project which gets the data from DynamoDB. This Lambda is inturn added as Integration to API Gateway


<b>API Gateway:</b> 
This service is used to create an HTTP service which can be used by React application to get the Data. The API Gateway uses the Lambda functions created as part of their Integrations while defining ROUTES for the service.

Endpoint: This is the "Development" stage endpoint "https://bqgn8o5c4d.execute-api.us-east-1.amazonaws.com/Development/" which is deployed in EAB AWS. It also has the following routes for getting different data:
<li>/accessibility</li>
<li>/services</li>
<li>/menu</li>
<li>/images</li>

### Code Strucure

We have added few scripts under <b>components/scripts</b> folder which are responsible to Create DynanoDB or Insert Data into DynamoDB. To do this via terminal navigate to script folder and execute $ node {fileName}


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
