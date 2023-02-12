import {useState} from 'react';
import {ChevronDown, ChevronUp} from '@tamagui/lucide-icons';
import {TamaguiProvider} from 'tamagui';
import {useColorScheme} from 'react-native';
import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack,
  Text,
  Input,
} from 'tamagui';
import config from './tamagui';

function SheetDemo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);

  return (
    <>
      <Button
        aria-label={'toggle-sheet-button'}
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen(x => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom>
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center" theme={'light'}>
          <Sheet.Handle />
          <Text>Username: </Text>

          <Input size="$4" borderWidth={2} />

          <Text>Password: </Text>

          <Input
            keyboardType="number-pad"
            size="$4"
            borderWidth={2}
            theme={'light'}
          />

          <Button
            size="$6"
            aria-label={'close-sheet-button'}
            // onPress={handleSubmit(onSubmit)}
          >
            Login
          </Button>
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            aria-label={'close-sheet-button'}
            onPress={() => {
              setOpen(false);
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}

function App() {
  const theme = useColorScheme() || 'light';

  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme={theme}>
      <YStack f={1} jc="center" ai="center" p="$4" space>
        <YStack space="$4" maw={600}>
          <H1 ta="center" fontFamily={'$silkscreen'}>
            Welcome to Tamagui.
          </H1>
          <Paragraph ta="center">
            Here&apos;s a basic starter to show navigating from one screen to
            another. This screen uses the same code on Next.js and React Native.
          </Paragraph>

          <Separator />
          <Paragraph ta="center">
            Made by{' '}
            <Anchor
              color="$color12"
              href="https://twitter.com/natebirdman"
              target="_blank">
              @natebirdman
            </Anchor>
            ,{' '}
            <Anchor
              color="$color12"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer">
              give it a ⭐️
            </Anchor>
          </Paragraph>
        </YStack>

        <XStack>
          <Button>Link to user</Button>
        </XStack>

        <SheetDemo />
      </YStack>
    </TamaguiProvider>
  );
}

export default App;
