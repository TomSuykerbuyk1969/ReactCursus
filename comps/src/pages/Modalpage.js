import { useState } from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>


    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            { showModal &&  modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor diam. Morbi viverra commodo ipsum, vitae rutrum nulla cursus vel. Vestibulum non arcu eget nisl porta lobortis at quis justo. Cras justo magna, mollis eget commodo ut, rhoncus nec justo. Integer est libero, lacinia ac mollis quis, auctor vestibulum turpis. Nam lobortis lorem vitae mauris blandit iaculis. Curabitur non dui nec nulla ultrices consectetur et quis dui. Cras porta velit sed quam vehicula, eu tincidunt massa aliquam. In suscipit, eros in porta vestibulum, ante lorem bibendum ex, a lacinia neque ante ut risus.
            </p>
        </div>
    );
}

export default ModalPage;