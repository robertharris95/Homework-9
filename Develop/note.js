class Note  {
    constructor(title, content, id){

        this.title = title;
        this.content = content;
        this.id = id;
    }

    gettitle() {
        return this.title;
    }

    getcontent() {
        return this.content;
    }

    getid(){
        return this.id;
    }
}


module.exports = Note;