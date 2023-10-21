import { Text, View } from 'react-native';

type TestComponentProps = {
  name: string;
};

const TestComponent = ({ name }: TestComponentProps) => {
  return (
    <View>
      <Text>Goodbye {name}</Text>
    </View>
  );
};

export default TestComponent;
