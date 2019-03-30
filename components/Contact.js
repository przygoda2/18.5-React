var contacts = [
  {
    id: 1,
    firstName: 'Adam',
    lastName: 'Adamczyk',
    email: 'adam.adamczyk@gmail.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Adamek',
    email: 'adam.adamek@gmail.com',
  },
  {
    id: 3,
    firstName: 'Adam',
    lastName: 'Madam',
    email: 'a.madam@gmail.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};


var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-outline-512.png'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});