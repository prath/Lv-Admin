<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg">

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Financial Report</h3>
          <p>List of Financial Report</p>
        </div>
      </div>




      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">
          <div class="field filter-select">
            <div class="control">
              <div class="select">
                <select>
                  <option value="-">
                    Filter
                  </option>
                  <option value="by_date">
                    By Status
                  </option>
                  <option value="by_price">
                    By Tour Type
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group icon-search">
            <img
              src="../assets/img/ic-search.svg"
              alt=""
            >
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Financial Report"
            >
          </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="tabs">
            <ul>
              <li class="is-active">
                <a>DAILY</a>
              </li>
              <li><a href="#">MONTHLY</a></li>
              <li><a href="#">QUARTERLY</a></li>
              <li><a href="#">YEARLY</a></li>
            </ul>
          </div>
        </div>
      </div>





      <div class="columns">
        <div class="column is-full">
          <table class="table is-fullwidth table--orders">
            <thead>
              <tr>
                <th>No PO</th>
                <th>No Invoice</th>
                <th>Judul Tour</th>
                <th>Nama Guest</th>
                <th>Status Order</th>
                <th>Download Invoice</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(financial) in financialList">
                <tr>
                  <td>
                    <div class="wrapper">
                      <span class="info">{{ financial.poNo }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ financial.invoiceNo }}</span> <br>
                    </div>
                  </td>
                  <td>
                    <div class="wrapper">
                      <span class="info">{{ financial.tour }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ financial.guest }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span
                        v-if="financial.status==='Waiting'"
                        class="info badges badges--wait-payment"
                      >{{ financial.status }}</span>

                      <span
                        v-if="financial.status==='Unpaid'"
                        class="info badges badges--completed"
                      >{{ financial.status }}</span>
                      <span
                        v-if="financial.status==='Paid'"
                        class="info badges badges--primary"
                      >{{ financial.status }}</span>
                      <span
                        v-if="financial.status==='Cancelled'"
                        class="info badges badges--unverified"
                      >{{ financial.status }}</span>
                      <span
                        v-if="financial.status==='Refunded'"
                        class="info badges badges--unprocess"
                      >{{ financial.status }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper text-center">
                      <router-link
                        to="/assets/invoices/invoice_1092-122.pdf"
                        target="_blank"
                      >
                        <a title="Edit Refund"><img
                          src="../assets/img/ic-pdf.svg"
                          title="Download Invoices"
                          width="30"
                          height="30"
                        ></a>
                      </router-link>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
		return {

      financialList : [
                  {
                    "poNo": '2020020119001' ,
                    "invoiceNo": '#1092-122',
                    "tour" : 'Kayaking di Perairan Bandung',
                    "guest" : 'Novi Irianty',
                    "status" : 'Waiting'
                  },
                  {
                    "poNo": '2020020119002' ,
                    "invoiceNo": '#1092-123',
                    "tour" : 'Kayaking di Perairan Bandung',
                    "guest" : 'Andi Ramadan',
                    "status" : 'Unpaid'
                  },
                  {
                    "poNo": '20200201190013' ,
                    "invoiceNo": '#1092-124',
                    "tour" : 'Kayaking di Perairan Bandung',
                    "guest" : 'Gilang Mukhti',
                    "status" : 'Paid'
                  },
                  {
                    "poNo": '2020020119004' ,
                    "invoiceNo": '#1092-125',
                    "tour" : 'Kayaking di Perairan Bandung',
                    "guest" : 'Wiwi Fitria',
                    "status" : 'Cancelled'
                  },
                  {
                    "poNo": '2020020119005' ,
                    "invoiceNo": '#1092-126',
                    "tour" : 'Kayaking di Perairan Bandung',
                    "guest" : 'Sam Immanuel',
                    "status" : 'Refunded'
                  },


        ]

      }
   }
}
</script>