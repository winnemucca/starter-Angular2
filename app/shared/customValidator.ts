import { Control } from 'angular2/common';

export /**
 * CustomValidator
 */
class CustomValidator {

    static underscorecheck (control: Control ) {
        if (control.value.indexOf('_') >= 0) {
            return null
        }
        
            return { underscorenotfound : true}
    }
    static userunique (control: Control ) {
        return new Promise ((resolve) => {
            setTimeout(() => {
                if (control.value =="steve") {
                    resolve({ usernotunique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000 )
        })
        
    }
    // constructor(parameters) {
        
    // }
}