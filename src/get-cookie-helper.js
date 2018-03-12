import Cookies from 'js-cookie'

const SpecificPurposeCookies = function() {
    return {
        get: function(name) {
            return Cookies.get(name);
        },
        set: function(name, value, attributes) {
            Cookies.set(name, value, attributes);
        },
        remove: function(name, attributes) {
            Cookies.remove(name, attributes);
        }
    };
};

export default SpecificPurposeCookies()