/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Text from "./Text";
import { Collapse } from "antd";

const FAQ = () => {
  const items = [
    {
      key: "1",
      label: "How do I book a ticket?",
      children: (
        <div>
          <p>Select a date and time.</p>
          <p>Choose the number of tickets.</p>
          <p>Choose the number of tickets.</p>
          <p>Click through to the next page and enter your personal details.</p>
          <p>
            After entering your personal details, select your payment method and
            enter your payment details.
          </p>
          <p>
            Once you’ve entered your payment details successfully, you'll be
            redirected to your ticket page where you can check the status and
            details of your reservations.
          </p>
          <p>
            You'll receive a confirmation email once the reservation is
            confirmed with the attraction operator. This could take some time
            based on the supplier.
          </p>

          <p>
            You can view your tickets in your confirmation email or the Booking
            and Trips section of your account.
          </p>
        </div>
      ),
    },
    {
      key: "2",
      label: "When do I pay?",
      children: (
        <p>
          Booking.com collects payment on behalf of the attraction operator when
          you book your ticket.
        </p>
      ),
    },
    {
      key: "3",
      label: "How do digital tickets work?",
      children: (
        <div>
          <p>
            Each digital ticket contains a unique code. This is usually a QR or
            numerical code, but could be something else and can be found on your
            ticket or the PDF sent to you.
          </p>
          <p>
            If your digital ticket contains a barcode or QR code, show it to the
            staff at the attraction's entrance or ticket collection point for
            them to scan.
          </p>

          <p>
            For those with numerical codes, show your ticket to staff for
            verification.
          </p>
        </div>
      ),
    },
    {
      key: "4",
      label: "Can I cancel or modify my tickets?",
      children: (
        <div>
          <p>
            You’ll need to check the policy on the specific ticket you book.
            Last-minute bookings might not have free cancellation available.
          </p>
        </div>
      ),
    },

    {
      key: "5",
      label: "When will I get my free cancellation refund?",
      children: (
        <div>
          <p>
            After you cancel, we'll issue a full refund immediately. Depending
            on your bank or payment provider, it can take 3–10 days to be
            refunded to your original payment method.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="my-10">
      <Text text={"Frequently asked questions"} />

      <Collapse className="mt-4" size="large" items={items} />
    </div>
  );
};

export default FAQ;
