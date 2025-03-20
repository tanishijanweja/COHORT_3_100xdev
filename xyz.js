<script>
        function updateClock() {
            const now = new Date();
            
            // Get hours, minutes, and seconds
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            
            // Add leading zeros if needed
            hours = hours.toString().padStart(2, '0');
            minutes = minutes.toString().padStart(2, '0');
            seconds = seconds.toString().padStart(2, '0');
            
            // Format the time string
            const timeString = `${hours}:${minutes}:${seconds}`;
            
            // Update the display
            document.getElementById('clock').textContent = timeString;
            
            // Schedule the next update
            setTimeout(updateClock, 1000);
        }

        // Start the clock
        updateClock();
    </script>