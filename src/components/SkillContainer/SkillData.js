import htmlIcon from '../../assets/images/icons/html5.png'
import cssIcon from '../../assets/images/icons/css3.png'
import jsIcon from '../../assets/images/icons/javascript.png'
import angularIcon from '../../assets/images/icons/angular.png'
import reactIcon from '../../assets/images/icons/react.png'
import nodeIcon from '../../assets/images/icons/nodejs.png'
import blenderIcon from '../../assets/images/icons/blender.png'
import bootstrapIcon from '../../assets/images/icons/bootstrap.png'
import cIcon from '../../assets/images/icons/c.png'
import cspIcon from '../../assets/images/icons/csp.png'
import dockerIcon from '../../assets/images/icons/docker.png'
import expressIcon from '../../assets/images/icons/express.png'
import flaskIcon from '../../assets/images/icons/flask.png'
import gitIcon from '../../assets/images/icons/git.png'
import githubIcon from '../../assets/images/icons/github.png'
import hibernateIcon from '../../assets/images/icons/hibernate.png'
import javaIcon from '../../assets/images/icons/java.png'
import jenkinsIcon from '../../assets/images/icons/jenkins.png'
import kafkaIcon from '../../assets/images/icons/kafka.png'
import linuxIcon from '../../assets/images/icons/linux.png'
import microserviceIcon from '../../assets/images/icons/microservice.png'
import mongoIcon from '../../assets/images/icons/mongo.png'
import mysqlIcon from '../../assets/images/icons/mysql.png'
import phpIcon from '../../assets/images/icons/php.png'
import postmanIcon from '../../assets/images/icons/postman.png'
import pythonIcon from '../../assets/images/icons/python.png'
import redisIcon from '../../assets/images/icons/redis.png'
import restIcon from '../../assets/images/icons/rest.png'
import springIcon from '../../assets/images/icons/spring.png'
import typeIcon from '../../assets/images/icons/typescript.png'
import unityIcon from '../../assets/images/icons/unity.png'
import visIcon from '../../assets/images/icons/vis.png'
import tomcatIcon from '../../assets/images/icons/apache-tomcat.png'
import awsIcon from '../../assets/images/icons/aws.png'
import lambdaIcon from '../../assets/images/icons/aws-lambda.png'
import awsS3Icon from '../../assets/images/icons/aws-s3.png'
import awsEc2Icon from '../../assets/images/icons/aws-ec2.png'
import gitlabIcon from '../../assets/images/icons/gitlab.png'
import googleApiIcon from '../../assets/images/icons/google-api.png'
import graphqlIcon from '../../assets/images/icons/graphql.png'
import jiraIcon from '../../assets/images/icons/jira.png'
import mixamoIcon from '../../assets/images/icons/mixamo.png'
import nginxIcon from '../../assets/images/icons/nginx.png'
import eclipseIcon from '../../assets/images/icons/eclipse.png'
import illusIcon from '../../assets/images/icons/illustrator.png'
import intellijIcon from '../../assets/images/icons/intellij.png'
import photoIcon from '../../assets/images/icons/photoshop.png'
import dynamoIcon from '../../assets/images/icons/dynamo.png'




export const SkillData = {

    fend : [
        {
            icon:htmlIcon, 
            title:"HTML", 
            score:80, 
            time:3, 
            text:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
        },
        {
            icon:cssIcon, 
            title:"CSS", 
            score:90, 
            time:3, 
            text:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
        },
        {
            icon:jsIcon, 
            title:"JavaScript", 
            score:90, 
            time:3, 
            text:"JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries."
        },
        {
            icon:angularIcon, 
            title:"Angular", 
            score:60, 
            time:1, 
            text:"Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS."
        },
        {
            icon:reactIcon, 
            title:"React", 
            score:90, 
            time:2, 
            text:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
        },
        {
            icon:bootstrapIcon, 
            title:"Bootstrap 5", 
            score:80, 
            time:3, 
            text:"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
        },
        {
            icon:phpIcon, 
            title:"PHP", 
            score:50, 
            time:2, 
            text:"PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group."
        },
        {
            icon:restIcon, 
            title:"REST", 
            score:90, 
            time:2, 
            text:"Representational state transfer is a software architectural style that describes a uniform interface between decoupled components in the Internet in a Client-Server architecture."
        },
        {
            icon:typeIcon, 
            title:"TypeScript", 
            score:70, 
            time:1, 
            text:"TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript."
        }
    ],

    bend : [
        {
            icon: tomcatIcon, 
            title:"Apache Tomcat", 
            score: 70, 
            time: 2, 
            text:"pache Tomcat is a free and open-source implementation of the Jakarta Servlet, Jakarta Expression Language, and WebSocket technologies. Tomcat provides a pure Java HTTP web server environment in which Java code can run."
        },
        {
            icon:awsIcon, 
            title:"AWS", 
            score: 60, 
            time: 1, 
            text:"Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. These cloud computing web services provide distributed computing processing capacity and software tools via AWS server farms."
        },
        {
            icon: lambdaIcon, 
            title:"AWS Lambda", 
            score: 70, 
            time: 1, 
            text:"AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code. It was introduced in November 2014."
        },
        {
            icon:nodeIcon, 
            title:"Node JS", 
            score:90, 
            time:2, 
            text:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications."
        },
        {
            icon:nginxIcon, 
            title:"NGINX", 
            score:60, 
            time:1, 
            text:"Nginx, stylized as NGIИX, is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. The software was created by Igor Sysoev and publicly released in 2004. Nginx is free and open-source software, released under the terms of the 2-clause BSD license."
        },
        {
            icon:expressIcon, 
            title:"Express JS", 
            score:50, 
            time:1, 
            text:"Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
        },
        {
            icon:flaskIcon, 
            title:"Flask", 
            score:60, 
            time:1, 
            text:"Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions."
        },
        {
            icon:googleApiIcon, 
            title:"Google API", 
            score: 60, 
            time: 1, 
            text:"Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, Google Drive, and YouTube."
        },
        {
            icon:hibernateIcon, 
            title:"Hibernate", 
            score:80, 
            time:1, 
            text:"Hibernate ORM is an object–relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database."
        },
        {
            icon:javaIcon, 
            title:"Java", 
            score:90, 
            time:3, 
            text:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
        },
        {
            icon:kafkaIcon, 
            title:"Kafka", 
            score:50, 
            time:1, 
            text:"Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds."
        },
        {
            icon:microserviceIcon, 
            title:"MicroServices", 
            score:70, 
            time:1, 
            text:"A microservice architecture – a variant of the service-oriented architecture structural style – arranges an application as a collection of loosely-coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight."
        },
        {
            icon:pythonIcon, 
            title:"Python 3", 
            score:90, 
            time:3, 
            text:"Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected."
        },
        {
            icon:springIcon, 
            title:"Spring Boot", 
            score:90, 
            time:1, 
            text:"The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform."
        },
    ],

    vsctrl : [
        {
            icon:dockerIcon, 
            title:"Docker", 
            score:50, 
            time:1, 
            text:"Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc."
        },
        {
            icon:gitIcon, 
            title:"Git", 
            score:60, 
            time:3, 
            text:"Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows."
        },
        {
            icon:githubIcon, 
            title:"Github", 
            score:70, 
            time:3, 
            text:"GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features."
        },
        {
            icon:jenkinsIcon, 
            title:"Jenkins", 
            score:45, 
            time:1, 
            text:"Jenkins is an open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat."
        },
        {
            icon:jiraIcon, 
            title:"Jira", 
            score: 40, 
            time:1, 
            text:"Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management."
        },
    ],

    cs : [
        {
            icon:cIcon, 
            title:"C", 
            score:60, 
            time:3, 
            text:"C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs."
        },
        {
            icon:cspIcon, 
            title:"C#", 
            score:60, 
            time:2, 
            text:"C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."
        },
        {
            icon:linuxIcon, 
            title:"Linux", 
            score:50, 
            time:1, 
            text:"Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution."
        },
    ],

    dbs : [
        {
            icon: awsS3Icon, 
            title:"AWS S3", 
            score: 70, 
            time: 1, 
            text:"Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its e-commerce network."
        },
        {
            icon: awsEc2Icon, 
            title:"AWS EC2", 
            score: 70, 
            time: 1, 
            text:"Amazon Elastic Compute Cloud is a part of Amazon.com's cloud-computing platform, Amazon Web Services, that allows users to rent virtual computers on which to run their own computer applications. "
        },
        {
            icon: dynamoIcon, 
            title:"AWS DynamoDB", 
            score: 60, 
            time: 1, 
            text:"Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio. DynamoDB exposes a similar data model to and derives its name from Dynamo, but has a different underlying implementation. "
        },
        {
            icon: graphqlIcon, 
            title:"GraphQL", 
            score: 50, 
            time: 1, 
            text:"GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015."
        },
        {
            icon:mongoIcon, 
            title:"Mongo DB", 
            score:60, 
            time:1, 
            text:"MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions."
        },
        {
            icon:mysqlIcon, 
            title:"MySQL", 
            score:80, 
            time:3, 
            text:"MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter, and 'SQL', the abbreviation for Structured Query Language."
        },
        {
            icon:redisIcon, 
            title:"Redis", 
            score:70, 
            time:1, 
            text:"Redis is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indices."
        },
        
    ],

    xr : [
        {
            icon:blenderIcon, 
            title:"Blender 3D", 
            score:80, 
            time:3, 
            text:"Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games."
        },
        {
            icon:mixamoIcon, 
            title:"Mixamo", 
            score:80, 
            time:2, 
            text:"Mixamo is a 3D computer graphics technology company. Based in San Francisco, the company develops and sells web-based services for 3D character animation. Mixamo's technologies use machine learning methods to automate the steps of the character animation process, including 3D modeling to rigging and 3D animation."
        },
        {
            icon:unityIcon, 
            title:"Unity 3D", 
            score:90, 
            time:2, 
            text:"Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Worldwide Developers Conference as a Mac OS X game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console and virtual reality platforms."
        },
        {
            icon:illusIcon, 
            title:"Adobe Illustrator", 
            score:50, 
            time:1, 
            text:"Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985. Along with Creative Cloud, Illustrator CC was released."
        },
        {
            icon:photoIcon, 
            title:"Photoshop", 
            score:60, 
            time:2, 
            text:"Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole."
        },
    ],


    tools : [
        {
            icon:postmanIcon, 
            title:"Postman", 
            score:90, 
            time:2, 
            text:"Postman is an API platform for developers to design, build, test and iterate their APIs. As of April 2022, Postman reports having more than 20 million registered users and 75,000 open APIs, which it says constitutes the world's largest public API hub."
        },
        {
            icon:gitlabIcon, 
            title:"Gitlab", 
            score:50, 
            time:1, 
            text:"GitLab Inc. is an open-core company that provides GitLab, a DevOps software package that combines the ability to develop, secure, and operate software in a single application. The open source software project was created by Ukrainian developer Dmitriy Zaporozhets and Dutch developer Sytse Sijbrandij."
        },
        {
            icon:visIcon, 
            title:"Visual Studio", 
            score:80, 
            time:3, 
            text:"Microsoft Visual Studio is an integrated development environment from Microsoft. It is used to develop computer programs, as well as websites, web apps, web services and mobile apps."
        },
        {
            icon:eclipseIcon, 
            title:"Eclipse IDE", 
            score:80, 
            time:3, 
            text:"Eclipse is an integrated development environment used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment. It is the second-most-popular IDE for Java development, and, until 2016, was the most popular."
        },
        {
            icon:intellijIcon, 
            title:"IntelliJ IDE", 
            score:80, 
            time:1, 
            text:"IntelliJ IDEA is an integrated development environment written in Java for developing computer software written in Java, Kotlin, Groovy, and other JAR based languages. It is developed by JetBrains, and is available as an Apache 2 Licensed community edition, and in a proprietary commercial edition."
        },
    ]

}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    