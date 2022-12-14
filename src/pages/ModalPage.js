import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  const actionBar = <Button primary onClick={handleClick}>I accept</Button>;
  const modal = <Modal onClose={handleClick} actionBar={actionBar}>
    <p>Here is important agreement for you to accept</p>
  </Modal>;

  return <div className="relative">
    <Button primary onClick={handleClick}>Open Modal</Button>

    {showModal && modal}

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>

    <p>Curabitur at nunc vitae lorem luctus feugiat. Maecenas elit mauris, luctus in placerat a, convallis ac augue. Donec vulputate ut felis a viverra. In lectus ligula, ultrices et cursus at, gravida at nunc. Duis placerat placerat mauris, id posuere sem ornare sit amet. Donec sit amet felis dapibus, venenatis metus vel, accumsan nulla. Suspendisse facilisis massa nec tempus cursus. Etiam sed tellus at nisi dignissim tristique dapibus ut massa. Donec mollis viverra tortor, vitae aliquet nisi. Morbi ac turpis dui. Pellentesque quis pharetra dolor. Cras erat lectus, aliquet quis auctor varius, condimentum vitae ex. Cras non viverra diam, eget euismod odio.</p>
  </div>
}

export default ModalPage;
