import { Form, FormControl, FormLabel, FormGroup } from "react-bootstrap"

function translationText() {
    return (
        <Form>
         <FormGroup className="mb-3">
            <FormLabel>Write your name</FormLabel>
            <FormControl type="name" placeholder="Write here"/>
         </FormGroup>
      </Form>
    )
}
export default translationText