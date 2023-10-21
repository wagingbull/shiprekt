import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  address: string;
}

interface AccountFormProps {
  title: string;
  onSubmit: Function;
}

export function AccountForm({ title, onSubmit }: AccountFormProps) {
  const form = useForm({
    initialValues: {
      address: '0x000000000000000000000000000000000000dead',
    },

    validate: {
      address: value => {
        const isValidETHAddress = /^(0x)?[0-9a-fA-F]{40}$/.test(value);
        return isValidETHAddress ? null : 'Invalid Ethereum address';
      },
    },
  });

  const onSubmitHandler = async (values: FormValues) => {
    onSubmit(values);
  };

  return (
    <Box mb="xl">
      <p>{title}</p>
      <form onSubmit={form.onSubmit(onSubmitHandler)}>
        <TextInput
          withAsterisk
          placeholder="wallet address"
          {...form.getInputProps('address')}
        />

        <Group position="right" mt="md">
          <Button type="submit">View Cryptopunks</Button>
        </Group>
      </form>
    </Box>
  );
}
