class Contact{
    constructor(firstName,lastName,phone,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        if(this.online  === true)
        {
            this.tit.addClass('online');
        }
        this.online = false;
        this.tit;
        
    }
    render(id){
        let article = $('<article>');
        let title = $(`<div class="title">${this.firstName} ${this.lastName}</div>`);
        let button = $('<button >&#8505;</button>');
        button.click(action);
        title.append(button)
        function action() {
            $(this).parent().next().toggle();
        }
        let info = $(`<div class="info" style="display: none" >
    <span>&phone; ${this.phone}</span>
    <span>&#9993; ${this.email}</span>
      </div>`);
        this.tit = title;
        article.append(title);
        article.append(info);
        $(`#${id}`).append(article);
    }

    set online(online){
        this._online = online;
        if(this.tit === undefined)
        {
        return;
        }
        if(online === true)
        {
         this.tit.addClass('online');
        }
        else if(online === false)
        {
          this.tit.removeClass('online');

        }
    }
    get online(){
        return this._online;
    }
}