# Please read README file before clone the project.

## Notes About Product-Page implementation for Eteration.

You can start the project with 'npm start'. 

##About Filtering in left side

The filtering based on Model and Brands in this scenario has been implemented solely through GET requests. The technical approach of triggering a fetch request to the searchProductsUsingGet service upon every user *click* Event is not desired. Additionally, setting a state with each data returned by the searchProductsUsingGet service would create a circular condition, which contradicts React's operational principles. In a more efficiently designed scenario, sending these filters as an array in a single POST request would better meet the necessary technical principles. Therefore, no query was made to the API using multioptional filters.


##About Responsive Design

Regarding the absence of a mobile design, although efforts were made to adhere to responsive design principles, the lack of design visuals for different screen sizes might result in suboptimal UI and UX outcomes. The arrangement and presentation of components, as well as the layout's overall appearance, could be better designed and coded with more time investment to enhance outcomes.

##Next Episode of Development Process

If the project continues to develop and the use of the context API is deemed appropriate by the developers, further performance optimization can be achieved by creating more context files and having their related providers only wrap the necessary pages. Moreover, the application's performance could be improved by efficiently integrating React's offered tools such as useMemo, useContext, and React.memo.




Regarding unit testing, not every detail has been considered. A test has been written for the header component only as an example.
