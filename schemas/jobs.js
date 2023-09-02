export default{

    name:'job',

    type:'document',

    title:'Job',

    fields:[

        {

            title:'Employer logo',

            name:'employer_logo',

            type:'image'

        },

        {

            title:'Employer Name',

            name:'employer_name',

            type:'string'

        },

        {

            name:'job_title',

            type:'string',

            title:'Job Title'


        },

        {

            name:'from',

            type:'string',

            title:'date posted'


        },

        {

            name:'job_description',

            type:'string',

            title:'About'

        },

        {

            name:'qualifications',

            type:'array',

            title:'Qualifications',

            of:[{type:'string'}]

        },

        {

            name:'responsibilities',

            type:'array',

            title:'Responsibilities',

            of:[{type:'string'}]

        },

        {

            name:'job_location',

            type:'string',

            title:'Location'

        },

        {

            name:"job_type",

            type:"string",

            title:"Type"

        },

        {

            name:"job_link",

            type:"string",

            title:"Link"

        }

 

    ]

}