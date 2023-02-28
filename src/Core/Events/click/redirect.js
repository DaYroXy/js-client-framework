import Router from '../../Router.js'


const redirect = ({event, element, attribute: path}) => {
    Router.getInstance().redirect(path)
}

export default redirect