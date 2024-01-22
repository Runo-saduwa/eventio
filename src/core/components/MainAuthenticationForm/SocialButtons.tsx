import { Button, ButtonProps, Group } from '@mantine/core';
import { GoogleIcon } from './icons/GoogleIcon';
import { FacebookIcon } from './icons/FacebookIcon';


export function GoogleButton(props) {
  return <Button leftSection={<GoogleIcon />} variant="default" {...props} />;
}

export function FacebookButton(props) {
  return <Button leftSection={<FacebookIcon />} {...props} />;
}


