import { component$ } from '@builder.io/qwik';

export interface MyComponentProps {

}

export const MyComponent = component$<MyComponentProps>((props) => {
  return (
    <div>
      MyComponent component works!
    </div>
  );
});
