import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardTitle from "@saleor/components/CardTitle";
import Skeleton from "@saleor/components/Skeleton";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

interface OrderCustomerNoteProps {
  customerNote: string;
  deliveryNote: string;
}

export const OrderCustomerNote: React.FC<OrderCustomerNoteProps> = ({
  customerNote,
  deliveryNote
}) => {
  const intl = useIntl();

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Notes",
          description: "notes about customer, header"
        })}
      />
      <CardContent>
        <Grid
          style={{
            paddingTop: 10
          }}
        >
          {customerNote === undefined ? (
            <Skeleton />
          ) : customerNote === "" ? (
            <Typography color="textSecondary">
              <FormattedMessage defaultMessage="No notes from customer" />
            </Typography>
          ) : (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                {intl.formatMessage({
                  defaultMessage: "Customer Note",
                  description: "notes about customer"
                })}
              </Typography>
              <Typography>{customerNote}</Typography>
            </React.Fragment>
          )}
        </Grid>
        <Grid
          style={{
            paddingTop: 10
          }}
        >
          {deliveryNote === undefined ? (
            <Skeleton />
          ) : deliveryNote === "" ? (
            <Typography color="textSecondary">
              <FormattedMessage defaultMessage="No notes from delivery" />
            </Typography>
          ) : (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                {intl.formatMessage({
                  defaultMessage: "Delivery Note",
                  description: "notes about delivery"
                })}
              </Typography>
              <Typography>{deliveryNote}</Typography>
            </React.Fragment>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};
export default OrderCustomerNote;
