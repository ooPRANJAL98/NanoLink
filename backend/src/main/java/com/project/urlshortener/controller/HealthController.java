@RestController
public class HealthController {

    @GetMapping("/")
    public String home() {
        return "NanoLink is running!";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}