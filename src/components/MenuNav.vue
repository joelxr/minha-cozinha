<template>
  <nav id="nav">
    <ul>
      <li
        :key="m.nome"
        v-for="m in menu">
        <a href="#">{{ m.nome }}</a>
        <ul>
          <li
           :key="sm.nome"
           v-for="sm in m.submenu">
            <router-link :to="sm.rota">{{ sm.nome }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuNav',
  data () {
    return {
      menu: this.$menu
    }
  }
}
</script>

<style>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
}

#nav ul {
	list-style: none;
	float: left;
	margin: 0;
	padding: 0;
}

#nav ul a {
	display: block;
	color: #333;
	text-decoration: none;
	font-weight: 700;
	font-size: 12px;
	line-height: 32px;
	padding: 0 15px;
}

#nav ul li {
	position: relative;
	float: left;
	margin: 0;
	padding: 0;
}

#nav ul li:hover {
	background: #f6f6f6;
}

#nav ul ul {
	display: none;
	position: absolute;
	top: 100%;
	left: 0;
	background: #fff;
	padding: 0;
  border: 1px solid #ccc;
}

#nav ul ul li {
	float: none;
	width: 200px;
}

#nav ul ul a {
	line-height: 120%;
	padding: 10px 15px;
}

#nav ul ul ul {
	top: 0;
	left: 100%;
}

#nav ul li:hover > ul {
	display: block;
}
</style>
