import React from 'react';

const SpecialOrderInfo = ({ order, styles }) => {
  return (
    <div className={styles.info}>
      <table className="order__info1">
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{order.name}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{order.phone}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{order.email}</td>
          </tr>
          <tr>
            <th>Stripe ID:</th>
            <td>{order.stripeCharge}</td>
          </tr>
        </tbody>
      </table>
      <table className="order__info2">
        <tbody>
          <tr>
            <th>Company:</th>
            <td>{order.company}</td>
          </tr>
          <tr>
            <th>Total Price:</th>
            <td>${order.totalPrice / 100}</td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>{order.description}</td>
          </tr>
          <tr>
            <th />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpecialOrderInfo;
