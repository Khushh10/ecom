import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { mixed, object, string } from "yup";

const ProductCategory = () => {
    const validationSchema = object().shape({
        pName: string().required("*Required"),
        consumable: string().required("*Required"),
        icon: mixed().required("*Required")
    });

    const handleSubmit = async () => {
        console.log("Values",formik.values);
    }

    const formik = useFormik({
        initialValues: {
            pName: "",
            consumable: "",
            icon: "",
        },
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <div className="card text-center mb-3 " style={{ width: '18rem' }}>
            <div className="card-body">
                <Form onSubmit={formik.handleSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Product Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="pName" className="my-2" placeholder="Product Name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Consumable Type"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="consumable" className="my-2" placeholder="Consumable Type" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </FloatingLabel>
                    <Form.Control type="file" name="icon" className="my-2" accept="image/png, image/jpeg, image/vnd.microsoft.icon" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <Button type="submit" className="btn btn-primary btn-sm my-2">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default ProductCategory;