import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import Address from "../../value-object/address";
import CustomerAddressChanged from "../customer-address-changed.event";

export default class HandlerWhenCustomerAddressIsChanged
  implements EventHandlerInterface<CustomerAddressChanged>
{
  handle(event: CustomerAddressChanged): void {
    console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.address}`);
  }
}
