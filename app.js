new Vue({
    el: '#vue-app',
    data: {
        files: [],
        list: 'empty',
        checkedFiles: []
    },
    methods: {
        getFiles: async function()
        {
            let content = await fetch('https://localhost:44321/api/values');
            let text = await content.text();
            let actualText = text.substr(1,text.length-2);
            this.files = actualText.split(',');
        },

        getCoordinates : async function()
        {
            let toSend = ""
            console.log(this.checkedFiles)
            for(var i = 0; i<this.checkedFiles.length;i++)
            {
                toSend+=this.checkedFiles[i]+"-";
            }
            console.log(toSend);

            let content = await fetch('https://localhost:44321/api/values',{
                method: "POST",
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify(toSend),
                mode: 'cors'
            });
            let text = await content.text();
            console.log(text);
        }
    }
});
