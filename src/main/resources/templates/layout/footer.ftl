</div>
		<script src="${pageData.cdnUrl!""}/master/assets/js/bootstrap.joined.min.js?v=${pageData.versione!"1.0.0"}"></script>
		<script src="${pageData.cdnUrl!""}/master/assets/js/tablesaw.joined.min.js?v=${pageData.versione!"1.0.0"}"></script>

		<script>

			"use strict";

			$(document).ready(function() {
				$(opt.eMainContainer).trigger("enhance.tablesaw");
			});

		</script>
</body>
</html>
