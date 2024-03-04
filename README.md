# CS-465-J8379 Full Stack Development I

## Architecture

In the process of developing our full-stack project, we adopted several frontend technologies tailored to various application segments. The interface for users started with a foundation in Express HTML before moving to Handlebars templates, a shift aimed at improving site responsiveness by reducing the need to reload the entire page for each update. Given HTML's static, the capability to dynamically interact with the backend for real-time data updates. This gap was bridged by incorporating JavaScript, which facilitated dynamic content changes on the webpage by fetching trip details directly from the MongoDB database based on user interactions. The evolution towards a Single-Page Application (SPA) architecture marked a significant enhancement in user experience, doing away with traditional page reloads and delivering a smoother, more app-like engagement with the platform.

The choice of a NoSQL MongoDB database for the backend was driven by its flexibility in schema adaptation, accommodating changes in scale and functionality with ease. Additionally, MongoDB's non-relational architecture facilitates swift horizontal scaling, enhancing its capability to manage growth efficiently.


## Functionality

JSON, unlike JavaScript, serves as a lightweight format for data exchange, enabling seamless data flow between the frontend and backend by easily converting to JavaScript objects. This facilitates efficient data sharing and manipulation across application layers. 

In full-stack development, code refactoring for enhanced efficiency included merging similar trip components into a unified system, improving site functionality. Reusable UI components benefit development by reducing code complexity, speeding up the process, and lowering the risk of errors, assuming these components are secure.

## Testing

API testing in full-stack applications involves verifying endpoints for correct request handling and data retrieval, with an additional focus on security challenges. Initially, testing can be straightforward, such as checking data loading or error responses by accessing the API's localhost URL. Tools like Postman are more comprehensive, allowing for testing under various conditions, including security protocols to protect endpoints from unauthorized access. 

In full-stack development, HTTP methods (GET, POST, PUT, DELETE) facilitate interaction with the database, enabling dynamic webpage functionality. These methods correspond to backend operations (e.g., .create, .findOne) that manipulate data based on user requests. Endpoints, which are the interfaces seen by users or admins, must be thoroughly tested for accurate data display and error handling. Security layers are crucial to safeguard these endpoints from unauthorized access, ensuring that sensitive operations, like adding or editing database entries, are securely managed.

## Reflection

This course has significantly advanced my journey toward my professional goals by deepening my understanding of key technologies and practices within my career field. I've learned and refined skills in full-stack development, including working with modern frameworks, understanding RESTful API design, and implementing secure authentication methods. Mastery of these areas not only boosts my technical proficiency but also makes me a more attractive candidate to potential employers, showcasing my ability to develop comprehensive, secure, and efficient web applications.





