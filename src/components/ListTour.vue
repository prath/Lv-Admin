<template>
  <tr>
    <td>
      <div class="wrapper">
        <div class="form-check">
          <label class="container">
            <input
              type="checkbox"
              checked="checked"
            >
            <span class="checkmark" />
          </label>
        </div>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <div>
          <span class="info">{{ name }}</span>
          <p>{{ typeTrip }}</p>
        </div>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <span class="info badges badges--verified">{{ duration }}</span> <br>
      </div>
    </td>
    <td>
      <div class="wrapper">
        <span class="info">{{ price }}</span> <br>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <span class="info">{{ dateFrom }}</span>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <span class="info">{{ dateTo }}</span>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <span class="info">{{ location }}</span>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <span class="info icon">
          <router-link to="/tour-packages-detail">
            <a title="Edit User"><img
              src="assets/img/ic-edit-line.svg"
              title="Edit User"
            ></a>
          </router-link>

          <a title="Delete User"><img
            src="assets/img/ic-delete-line.svg"
            title="Delete User"
          ></a>

        </span>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
	name:'ListTour',
	props : [
						'name',
            'duration',
            'typeTrip',
						'price',
						'dateFrom',
						'dateTo',
						'location'
					]
}
</script>