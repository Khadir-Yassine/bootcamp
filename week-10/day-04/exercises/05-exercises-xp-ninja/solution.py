"""Two-phone call and message history."""


class Phone:
    def __init__(self, phone_number): self.phone_number, self.call_history, self.messages = str(phone_number), [], []
    def call(self, other_phone):
        message = f'{self.phone_number} called {other_phone.phone_number}'
        self.call_history.append(message); print(message); return message
    def show_call_history(self): print(self.call_history); return list(self.call_history)
    def send_message(self, other_phone, content):
        message = {'to': other_phone.phone_number, 'from': self.phone_number, 'content': content}
        self.messages.append(message.copy()); other_phone.messages.append(message.copy()); return message
    def show_outgoing_messages(self):
        messages = [message for message in self.messages if message['from'] == self.phone_number]; print(messages); return messages
    def show_incoming_messages(self):
        messages = [message for message in self.messages if message['to'] == self.phone_number]; print(messages); return messages
    def show_messages_from(self, sender=None):
        sender = input('Sender number: ') if sender is None else sender
        number = sender.phone_number if isinstance(sender, Phone) else str(sender)
        messages = [message for message in self.messages if message['from'] == number]; print(messages); return messages


if __name__ == '__main__':
    alice, bob = Phone('0611111111'), Phone('0622222222')
    alice.call(bob); alice.show_call_history(); alice.send_message(bob, 'Hello!'); bob.send_message(alice, 'Hi Alice!')
    alice.show_outgoing_messages(); alice.show_incoming_messages(); alice.show_messages_from(bob)
