module.exports = {
    options: {
        dest: 'dist',
        flow:{
            steps:{
                'js':[],
                'css':['cssmin']
            },
            post:{}
        }
    }
};