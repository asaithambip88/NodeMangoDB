var React = require('react');
class Index extends React.Component{
    render(){
        return(
            <div>
                <h2>Welcome {this.props.title}</h2>    
                <form action="/quotes" method="POST">
                <input type="text" placeholder="name" name="name"/>
                <input type="text" placeholder="quote" name="quote"/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
module.exports = Index;